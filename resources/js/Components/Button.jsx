import React from "react";
import propTypes from "prop-types";

Button.propTypes = {
    type: propTypes.oneOf(["button", "submit", "reset"]),
    className: propTypes.string,
    variant: propTypes.oneOf([
        "primary",
        "warning",
        "white-outline",
        "light-outline",
        "danger",
        "blue",
    ]),
    processing: propTypes.bool,
    children: propTypes.node,
};
export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center ${
                processing && "opacity-300"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
