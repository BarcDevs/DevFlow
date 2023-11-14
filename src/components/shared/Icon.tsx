import Image from 'next/image'
//TODO switch everywhere

type IconProps = {
    name: string
    size: number
    additionalStyle?: string
}

const Icon = ({name, size, additionalStyle}: IconProps) => (
    <Image
        src={`/assets/icons/${name}.svg`}
        alt={name}
        width={size}
        height={size}
        className={`object-contain ${additionalStyle}`}
    />
)

export default Icon