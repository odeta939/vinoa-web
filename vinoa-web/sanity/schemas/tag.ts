import { defineField, defineType } from "sanity";
import {AiFillTag} from "react-icons/ai";


export default defineType({
    name: "tag",
    title: "Tag",
    type: "document",
    icon: AiFillTag,
    fields: [
        defineField({
        name: "name",
        title: "Name of Tag",
        type: "string",
        }),
    ],
    });