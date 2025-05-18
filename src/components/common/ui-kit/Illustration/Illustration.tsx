import React from 'react';
import * as Illustrations from './components/Illustrations';
import { type EIllustrationName } from '@src/enums/illustration';

interface IProps {
    name: EIllustrationName;
}

export const Illustration: React.FC<IProps> = (props) => {
    const { name } = props;
    const NamedIllustration = Illustrations[name];

    if (!NamedIllustration) {
        return null;
    }

    return <NamedIllustration />;
};
