import React from "react";
import Link from 'next/link';

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            href={'#'}
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;