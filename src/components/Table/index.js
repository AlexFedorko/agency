import React, {memo} from 'react';

function Table(props) {
    const {columns, data, ...rest} = props;

    return (
        <table {...rest}>
            <thead>
            <tr>
                {columns.map((column, index) =>
                <th key={index}>{column.label}</th>
                )}
            </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) =>
                    <tr align='center' key={rowIndex}>
                        {columns.map((column, index) => {
                            const className = column.className || null;
                            let content;
                            if (column.render) {
                                if(typeof(column.render) !== "function") {
                                    if(rowIndex === 0) {
                                        console.error('This column.render(index:' + index + ') is not a Function!')
                                    }
                                }else {
                                    content = column.render(row,index)
                                }
                            }else {
                                content = row[column.dataIndex] ?? '-';
                            }
                            return <td className={className} key={index}>{content}</td>

                        })}
                        {/*{Object.values(item).map((itemCol, index)=>*/}
                        {/*    <td key={index}>{itemCol}</td>*/}
                        {/*)}*/}
                    </tr>
                )}
            </tbody>
        </table>
    )

}

export default memo(Table)