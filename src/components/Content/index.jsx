import React from 'react';

export default function Content() {
  return (
    <content>
      <form>
        <label htmlFor="text">cardholder name</label>
        <input type="text"/>

        <label htmlFor="text">card number</label>
        <input type="text"/>
      </form>
    </content>
  )
}