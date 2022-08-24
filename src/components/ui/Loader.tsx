import React, {FC} from 'react';
import {default as BaseLoader} from "@mdoffice/md-component/Loader";

interface LoaderProps {
    text?: string;
}
const Loader: FC<LoaderProps> = ({text}) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: BaseLoader(text as string) }} />
    );
};

export default Loader;