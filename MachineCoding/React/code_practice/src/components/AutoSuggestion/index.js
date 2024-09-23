// @ts-nocheck
"use client";
import React, { useCallback, useEffect, useState } from "react";
import Input from "./Input";
import List from "./List";
import useDebounce from "./useDebounce";
import Chip from "./Chip";

const AutoSuggestion = () => {
    const [recipes, setRecipes] = useState([]);
    const [selected, setSelected] = useState({});

    const fetchRecipes = useDebounce(async (value) => {
        try {
            const response = await fetch(
                `https://dummyjson.com/recipes/search?q=${value}`
            );
            if (!response.ok) {
                throw new Error("Api failed to fetch data");
            }
            const data = await response.json();
            setRecipes(data.recipes);
        } catch (err) {
            console.log("Api failed to fetch with error: ", err);
        }
    }, 1000);

    const handleSelected = useCallback((item) => {
        console.log(">", item);
        setSelected((prev) => {
            return {
                ...prev,
                [item.id]: item.name,
            };
        });
        setRecipes([]);
        console.log(">", item);
    }, []);

    const handleSearchParam = (value) => {
        if (!value) {
            setRecipes([]);
            return;
        }
        fetchRecipes(value);
    };

    const handleRemoveSelected = useCallback((key) => {
        setSelected((prev) => {
            const { [key]: _, ...restKeys } = prev;
            return restKeys;
        });
    }, []);

    return (
        <>
            <h2> Recipe Search </h2>
            <div className="relative">
                <div>
                    <Input customHandleInput={handleSearchParam} />
                </div>
                <div className="flex gap-2">
                    {selected &&
                        Object.keys(selected).length > 0 &&
                        Object.keys(selected).map((key, index) => (
                            <Chip
                                key={key}
                                label={selected[key]}
                                id={key}
                                handleRemove={handleRemoveSelected}
                            />
                        ))}
                </div>
                {recipes && (
                    <List list={recipes} handleSelect={handleSelected} />
                )}
            </div>
        </>
    );
};

export default AutoSuggestion;
