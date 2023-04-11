type Props = {
    name: string,
    icon: string
}

export const Set = ({ name, icon }: Props): JSX.Element => {
    return (
        <div className="p-4 flex flex-col w-36 items-center justify-between border-2 border-red-500 ">
            <img src={icon} width={50} />
            <p className="text-sm">{name} </p>
        </div>
    )
}