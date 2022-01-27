import React, {ReactNode} from "react";
import './ListItem.css';
import ListHeader from "../listHeader/ListHeader";

interface ListItemProps {
    children: ReactNode;
    header?: string;
}

function ListItem({children, header}: ListItemProps) {
    return (
        <>
            {
                header && <ListHeader text={header} />
            }
            <div className="ListItem">
                {children}
            </div>
        </>
    );
}

export default ListItem;