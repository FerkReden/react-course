import { FC } from "react";

import { IAlbum } from "../../interfaces/albumInterface";

interface IProps {
    album: IAlbum
}

const Album: FC<IProps> = ({album}) => {

    const { id, title} = album;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
        </div>
    )
};

export { Album };