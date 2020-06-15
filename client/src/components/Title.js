import React from 'react'
import { Checkbox, Button, Header, Icon } from 'semantic-ui-react'

const Title = ({ id, complete, name, updateTitle, deleteTitle }) => (
  <div styles={styles.flex}>
    <div style={styles.flex}>
      <Checkbox
      defaultChecked={complete}
      onClick={() => updateTitle(id)}
      />
      <div style={complete ? styles.complete : {}} className="center">
        <Header as="h2" style={{ marginLeft: "15px", }}>{ name }</Header>
      </div>
    </div>
    <Button 
    icon 
    color="dark red"
    size="tiny"
    onClick={() => deleteTitle(id)}
    style={{ marginLeft: "15px" }}
    >
      <Icon name="trash" />
    </Button>
  </div>
  )

  const styles = {
    complete: {
      textDecoration: "line-through",
      color: "black",
    },
    pointer: {
      cursor: "pointer",
    },
    flex: {
      display: "flex",
      alignItems: "center",
    },
  };

  export default Title;