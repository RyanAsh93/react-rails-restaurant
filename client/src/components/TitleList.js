import React from 'react';
import Title from './Title'

const TitleList = ({ titles, updateTitle, deleteTitle }) => (
  <div>
    { titles.map( title => 
      <Title
        key={title.id}
        {...title}
        updateTitle={updateTitle}
        deleteTitle={deleteTitle}
        />
      )
    }
  </div>
)

export default TitleList;