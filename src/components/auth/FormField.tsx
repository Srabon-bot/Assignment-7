import { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const FormField = ({ label, id, ...props }: FormFieldProps) => (
    <div>
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
            {label}
        </label>
        <input
            id={id}
            name={id}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-gray-500 focus:border-[#047F39]"
            {...props}
        />
    </div>
);

export default FormField;