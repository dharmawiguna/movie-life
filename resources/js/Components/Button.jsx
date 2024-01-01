import React from "react";
import PropTypes from "prop-types";

Button.PropTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "white-outline",
        "light-outline",
        "danger",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
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
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-300"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
