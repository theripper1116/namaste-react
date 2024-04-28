import { createContext } from "react";

import { SWIGGY_API_URL } from "./Links";

const SWIGGY_CONTEXT_VARIABLE = createContext({
    SWIGGY_API_URL: SWIGGY_API_URL,
});

export default SWIGGY_CONTEXT_VARIABLE;
