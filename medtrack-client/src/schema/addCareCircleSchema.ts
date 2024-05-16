import {z} from "zod"

const ccschema = z.object({
    name: z.string().min(1, {
        message: "Please give a name to your circle"
    })
})

export default ccschema