"use client";
import React from "react";

const CRUD = () => {
    const [list, setList] = React.useState([]);
    const INITIAL_VALUE = {
        name: "",
        phone: "",
        age: "",
        gender: "",
        nationality: "",
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "FORM_UPDATE": {
                return {
                    ...state,
                    [action.field]: action.payload,
                };
            }
            case "FORM_ERROR": {
                return {
                    ...state,
                    error: {
                        // @ts-ignore
                        ...error,
                        [action.field]: action.payload,
                    },
                };
            }
            case "FORM_RESET": {
                return INITIAL_VALUE;
            }
            default: {
                return state;
            }
        }
    };

    const [state, dispatch] = React.useReducer(reducer, INITIAL_VALUE);

    const formValid = () => {
        let isValid = true;
        if (!state.name) {
            // @ts-ignore
            dispatch({
                type: "FORM_ERROR",
                field: "name",
                payload: "Please enter name",
            });
            isValid = false;
        }
        if (!state.nationality) {
            // @ts-ignore
            dispatch({
                type: "FORM_ERROR",
                field: "nationality",
                payload: "Please select your nationality",
            });
            isValid = false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // @ts-ignore
        if (formValid()) {
            setList((prev) => [...prev, state]);
            // @ts-ignore
            dispatch({ type: "FORM_RESET" });
        }
    };

    const handleFormInput = (e) => {
        // @ts-ignore
        dispatch({
            type: "FORM_UPDATE",
            field: e.target.name,
            payload: e.target.value,
        });
    };

    const handleDelete = (phone) => {
        setList((prev) => {
            return prev.filter((user) => user.phone !== phone);
        });
    };

    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={handleFormInput}
                        />
                        {state.error?.name && (
                            <span className="error">{state.error?.name}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number: </label>
                        <input
                            type="tel"
                            name="phone"
                            maxLength={10}
                            value={state.phone}
                            onChange={handleFormInput}
                        />
                        {state.error?.phone && (
                            <span className="error">{state.error?.phone}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Age: </label>
                        <input
                            type="number"
                            name="age"
                            min={0}
                            max={100}
                            value={state.age}
                            onChange={handleFormInput}
                        />
                        {state.error?.age && (
                            <span className="error">{state.error?.age}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender: </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={state.gender === "male"}
                                onChange={handleFormInput}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={state.gender === "female"}
                                onChange={handleFormInput}
                            />
                            Female
                        </label>
                        {state.error?.gender && (
                            <span className="error">{state.error?.gender}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="nationality">Nationality: </label>
                        <select
                            name="nationality"
                            onChange={handleFormInput}
                            value={state.nationality}
                        >
                            <option value="">Please Select</option>
                            <option value="indian">Indian</option>
                            <option value="others">Others</option>
                        </select>
                        {state.error?.nationality && (
                            <span className="error">
                                {state.error?.nationality}
                            </span>
                        )}
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
            {list && list.length > 0 && (
                <div className="list">
                    <ul>
                        {list.map((user) => (
                            <li key={user.phone}>
                                {user.name}{" "}
                                <span>
                                    <button
                                        onClick={() => handleDelete(user.phone)}
                                    >
                                        Delete
                                    </button>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CRUD;
