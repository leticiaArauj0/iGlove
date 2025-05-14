import { Link, RelativePathString } from "expo-router";
import { ArrowLeft } from "phosphor-react-native";

interface ArrowLeftProps {
    link: RelativePathString,
    color: string
}

export function Arrow({link, color}: ArrowLeftProps) {
    return(
        <Link style={{position: 'absolute', left: 30, top: 30}} href={link}>
            <ArrowLeft size={36} color={color} />
        </Link>
    )
}