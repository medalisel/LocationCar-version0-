import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


/////////////////////////GET/////////////////////////////////////
export const getclient=createAsyncThunk('/getclient',async()=> {

try {

 let resultat= axios.get('http://localhost:5600/client/all')  
 return await resultat;
    
} catch (error) {
    console.log(error)    
}
})
/////////////////////////ADD//////////////////////////////////////////

//////////////////////delete////////////////////////////////////////


/////////////////////////////////////////////////////////////////////



const initialState = {
    client:null,
    status:null ,

}

export const clientSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
builder 

//get
.addCase (getclient.pending , (state) => {
state.status ="pending";
})

.addCase (getclient.fulfilled, (state,action) => {
state.status ="success"
state.client =action.payload?.data?.client ;
})

.addCase(getclient.rejected , (state) => {

    state.status="fail";
}) 

//add
.addCase (addclient.pending , (state) => {
  state.status ="pending";
  })
  
  .addCase (addclient.fulfilled, (state) => {
  state.status ="success"
  
  })
  
  .addCase(addclient.rejected , (state) => {
  
      state.status="fail";
  })

  //delete 

  .addCase (deleteclient.pending , (state) => {
    state.status ="pending";
    })
    
    .addCase (deleteclient.fulfilled, (state) => {
    state.status ="success"
    
    })
    
    .addCase(deleteclient.rejected , (state) => {
    
        state.status="fail";
    })

    //Update 
    .addCase (updateclient.pending , (state) => {
      state.status ="pending";
      })
      
      .addCase (updateclient.fulfilled, (state) => {
      state.status ="success"
      
      })
      
      .addCase(updateclient.rejected , (state) => {
      
          state.status="fail";
      })
  




  }
})

// Action creators are generated for each case reducer function
export const {} = clientSlice.actions

export default clientSlice.reducer