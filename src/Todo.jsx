import React, { useState, useEffect } from 'react';
import axios  from "axios";

// const getLocalItmes = () => {
//   let list = localStorage.getItem('lists');
//   console.log(list);

//   if (list) {
//     return JSON.parse(localStorage.getItem('lists'));
//   } else {
//     return [];
//   }
// }

const Todo = () => {

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert('plzz fill data');
    } else if (inputData && !toggleSubmit) {
      
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            const updateItems = {name: inputData }
            axios.put("http://127.0.0.1:8000/api/item/"+isEditItem,updateItems).then(response => {console.log(response.data);}).catch(error => { console.log(error);})
            return { ...elem, name: inputData }
          }
          return elem;
        })
      )
      setToggleSubmit(true);

      setInputData('');

      setIsEditItem(null);
    } else {
      const allInputData = {name: inputData }
      axios.post("http://127.0.0.1:8000/api/item/store",allInputData).then(response => {console.log(response);}).catch(error => { console.log(error);})
      setItems([...items, allInputData]);
      setInputData('')
    }
  }


  // delete the items
  const deleteItem = (index) => {
   
    axios.delete("http://127.0.0.1:8000/api/item/"+index).then(response => {console.log(response.data);}).catch(error => { console.log(error);})
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  }

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id
    });
    console.log(newEditItem);

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);

  }


  // remove all 
  const removeAll = () => {
    setItems([]);
  }
  
  // add data to localStorage
  useEffect(() => {
    async function getAllItems(){
      try {
        const allItems = await axios.get("http://127.0.0.1:8000/api/item")
        console.log(allItems.data)
        setItems(allItems.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllItems()
    // localStorage.setItem('lists', JSON.stringify(items))
  }, []);

  return (
    <>
      <div class="grid grid-cols-6 gap-4 mt-4">
        <div class="col-start-2 col-span-4 ...">
        <h2 class="text-4xl text-center font-semibold leading-normal mt-0 mb-4 text-green-600"> TODO LIST</h2>
        <div class="flex">
            <input class="px-2 flex-1 outline-none bg-slate-100 mr-2" type="text" placeholder="Enter item" value={inputData}
              onChange={(e) => setInputData(e.target.value)}/>
              {
              toggleSubmit ? <button class="p-4 cursor-pointer bg-blue-400 rounded text-white font-semibold hover:bg-blue-500" onClick={addItem}>Add</button> :
              <button class="p-4 cursor-pointer bg-blue-400 rounded text-white font-semibold hover:bg-blue-500" onClick={addItem}>Update Item</button>
            }
            
        </div>
    
            {
              items.map((elem) => {
                return (
                  
                <div class="hover:shadow flex justify-between items-center bg-gray-50 my-2" key={elem.id}>
                    <div class="flex">
                        <div class="ml-2">{elem.name}</div>
                    </div>
                    
                    <div>
                        <button class="btn blue mr-2" onClick={() => editItem(elem.id)}>update</button>
                        <button class="btn red" onClick={() => deleteItem(elem.id)}>Delete</button>
                    </div>
                </div>
                )
              })

            }
    
        
        
        </div>
      </div>

     
    </>
  )
}

export default Todo
