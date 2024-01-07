import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ auth, flashMessage }) {
    return (
        <Authenticated auth={auth}>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage?.message} />
            )}
            <Link href={route("admin.dashboard.movie.create")}>
                <Button type="button" className="w-40 mb-8">
                    Insert New Movie
                </Button>
            </Link>
        </Authenticated>
    );
}
