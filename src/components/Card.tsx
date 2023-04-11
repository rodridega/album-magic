type Props = {
    image: string
}

export const Card = ({ image }: Props): JSX.Element => {


    return (
        <img width={320} height={'auto'} src={image} />
    )
}