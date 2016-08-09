import React, { PropTypes } from 'react';
import { FlexTable, FlexColumn, AutoSizer } from 'react-virtualized';

const getUser = ({ rowData }) => rowData.user;
const renderUser = ({ cellData }) => (
  <div>
    <strong>@{cellData.screen_name}</strong> ({cellData.friends_count}/{cellData.followers_count})
  </div>
);
const getLocation = ({ rowData }) => rowData.user.location;
const rowClassName = ({ index }) => {
  if (index < 0) {
    return 'twitter-grid-row_head';
  } else {
    return index % 2 === 0 ? 'twitter-grid-row_even' : 'twitter-grid-row_odd';
  }
};

const VirtualizedTweets = (props) => {
  const { tweets } = props;
  return (
    <AutoSizer>
    {({ height, width }) => (
      <FlexTable
        className="twitter-flex-table padded-horizontally-more"
        gridClassName="twitter-grid"
        rowClassName={rowClassName}
        width={width}
        height={height}
        headerHeight={40}
        rowHeight={40}
        rowCount={tweets.length}
        rowGetter={
          ({ index }) => tweets[index]
        }
      >
        <FlexColumn
          label="User"
          cellDataGetter={getUser}
          cellRenderer={renderUser}
          width={200}
          dataKey="user"
        />
        <FlexColumn
          width={600}
          label="Text"
          dataKey="text"
        />
        <FlexColumn
          width={200}
          label="Location"
          dataKey="user"
          cellDataGetter={getLocation}
        />
      </FlexTable>
    )}
    </AutoSizer>
  );
};

export default VirtualizedTweets;
