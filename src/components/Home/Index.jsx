import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Button
} from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const URL = "http://localhost:4000";

const headCells = [{
  entity: 'Id',
},
{
  entity: 'Name',
},
{
  entity: 'Phone',
},
{
  entity: 'Email',
},
{
  entity: 'Hobbies',
},
]


function Home() {

  const [items, setItems] = useState([]);

  useEffect(
    () =>
      async function getData() {
        await axios.get(URL)
          .then(res => res.data)
          .then(data => setItems(data))
          .catch(err => console.log(err))
      }
    , [])

  async function deleteOne(item) {
    axios.delete(URL,
      {
        data:
          { phone: item.phone }
      }
    )
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  let i = 0;
  return (
    <div style={{
      margin: '0px 60px'
    }}>
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((item) => {
                return (
                  <TableCell key={item.entity}>{item.entity}</TableCell>
                )
              }
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {{ items } && items.map((item) => {
              i = i + 1
              return (
                <TableRow key={item.email}>
                  <TableCell>
                    {i}
                  </TableCell>
                  <TableCell>
                    {item.name}
                  </TableCell>
                  <TableCell>
                    {item.phone}
                  </TableCell>
                  <TableCell>
                    {item.email}
                  </TableCell>
                  <TableCell>
                    {item.hobbies}
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => deleteOne(item)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home;