interface Props{
    placeholder : string;
}


export default function Input({ placeholder }: Props) {
    return (
        <input placeholder={placeholder} className="px-5 py-2.5 text-gray-300 border border-slate-200 w-full outline-none rounded-md"/>
    )
}