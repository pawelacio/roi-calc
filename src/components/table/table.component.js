import React from 'react';

import {
  Container,
  Table as TableStyled,
  Head,
  Body,
  Row,
  HeadCell,
  Cell,
} from './table.styled';

class Table extends React.Component {

  renderHeading = () => {
    const { heading } = this.props;

    return(
      <Row>
        { heading && (
          <>
            { heading.map((item, key) => (
              <HeadCell key={ `heading-cell-${ key }` }>
                { item }
              </HeadCell>
            )) }
          </>
        )}
      </Row>
    )
  }

  renderData = () => {
    const { data } = this.props;

    return(
      <>
        { data && (
          <>
            { data.map((dataRow, rowKey) => (
              <Row key={ `data-row-${ rowKey }` }>
                { dataRow.map((dataCell, cellKey) => (
                  <Cell key={ `data-row-${ rowKey }-${ cellKey }` }>
                    { dataCell }
                  </Cell>
                ))}
              </Row>
            ))}
          </>
        )}
      </>
    )
  }

  render() {
    const { heading, data } = this.props;

    return(
      <Container>
        <TableStyled>
          <Head>{ this.renderHeading() }</Head>
          <Body>{ this.renderData() }</Body>
        </TableStyled>
      </Container>
    )
  }
}

export default Table;
