import Authenticated from "@/Layouts/Authenticated/Index";
import React, { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />

            <h1 className="text-xl">Insert a New Movie</h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                        <InputLabel forinput="name" value="Name" />
                        <Input
                            type="text"
                            name="name"
                            variant="primary-outline"
                            placeholder="Enter Name"
                            isFocused={true}
                            onChange={handleOnChange}
                            isError={errors.name}
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel forinput="category" value="Category" />
                        <Input
                            type="text"
                            name="category"
                            variant="primary-outline"
                            placeholder="Enter Category"
                            isFocused={true}
                            onChange={handleOnChange}
                            isError={errors.category}
                        />

                        <InputError
                            message={errors.category}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel forinput="video_url" value="Video URL" />
                        <Input
                            type="text"
                            name="video_url"
                            variant="primary-outline"
                            placeholder="Enter Video URL"
                            isFocused={true}
                            onChange={handleOnChange}
                            isError={errors.video_url}
                        />

                        <InputError
                            message={errors.video_url}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel forinput="thumbnail" value="Thumbnail" />
                        <Input
                            type="file"
                            name="thumbnail"
                            variant="primary-outline"
                            isFocused={true}
                            onChange={handleOnChange}
                            isError={errors.thumbnail}
                        />

                        <InputError
                            message={errors.thumbnail}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel forinput="rating" value="Rating" />
                        <Input
                            type="number"
                            name="rating"
                            variant="primary-outline"
                            placeholder="Enter Rating"
                            isFocused={true}
                            onChange={handleOnChange}
                            isError={errors.rating}
                        />

                        <InputError message={errors.rating} className="mt-2" />
                    </div>
                    <div className="flex flex-row mt-4 items-center">
                        <InputLabel
                            forinput="is_featured"
                            value="Is Featured"
                            className="mr-3 mt-2"
                        />
                        <Checkbox
                            name="is_featured"
                            onChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                        />
                        <InputError
                            message={errors.is_featured}
                            className="mt-2"
                        />
                    </div>
                </div>
                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
