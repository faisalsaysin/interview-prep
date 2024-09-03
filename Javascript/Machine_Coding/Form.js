import React from "react";

const Form = () => {
    const initialState = {
        name: "",
        number: "",
        age: "",
        gender: "",
        errors: {},
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "UPDATE_FIELD": {
                return {
                    ...state,
                    [action.field]: action.payload,
                    errors: { ...state.errors, [action.field]: "" }, // Clear error on change
                };
            }
            case "SET_ERROR": {
                return {
                    ...state,
                    errors: { ...state.errors, [action.field]: action.payload },
                };
            }
            case "RESET_FORM": {
                return initialState;
            }
            default:
                return state;
        }
    };

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "UPDATE_FIELD", field: name, payload: value });
    };

    const validateForm = () => {
        let isValid = true;
        if (!state.name) {
            isValid = false;
            dispatch({
                type: "SET_ERROR",
                field: "name",
                payload: "Name is required",
            });
        }
        if (!state.number || !/^\d{10}$/.test(state.number)) {
            isValid = false;
            dispatch({
                type: "SET_ERROR",
                field: "number",
                payload: "Valid 10-digit phone number is required",
            });
        }
        if (!state.age || state.age < 0 || state.age > 100) {
            isValid = false;
            dispatch({
                type: "SET_ERROR",
                field: "age",
                payload: "Age must be between 0 and 100",
            });
        }
        if (!state.gender) {
            isValid = false;
            dispatch({
                type: "SET_ERROR",
                field: "gender",
                payload: "Gender is required",
            });
        }
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted:", state);
            dispatch({ type: "RESET_FORM" });
        }
    };

    return (
        <div>
            <div className="form-container">
                <form id="details-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            name="name"
                            type="text"
                            value={state.name}
                            onChange={handleInputChange}
                        />
                        {state.errors.name && (
                            <p className="error">{state.errors.name}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Phone Number:</label>
                        <input
                            name="number"
                            type="tel"
                            value={state.number}
                            maxLength={10}
                            onChange={handleInputChange}
                        />
                        {state.errors.number && (
                            <p className="error">{state.errors.number}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                            name="age"
                            type="number"
                            min={0}
                            max={100}
                            value={state.age}
                            onChange={handleInputChange}
                        />
                        {state.errors.age && (
                            <p className="error">{state.errors.age}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <label>
                            <input
                                name="gender"
                                type="radio"
                                value="male"
                                checked={state.gender === "male"}
                                onChange={handleInputChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                name="gender"
                                type="radio"
                                value="female"
                                checked={state.gender === "female"}
                                onChange={handleInputChange}
                            />
                            Female
                        </label>
                        {state.errors.gender && (
                            <p className="error">{state.errors.gender}</p>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
