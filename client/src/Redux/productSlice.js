import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const getproduct = createAsyncThunk("product/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/product/");
    return result
  } catch (error) {
    console.log(error)
  }
})
//add product
export const addproduct = createAsyncThunk("product/add", async (newproduct) => {
  try {
    let result = axios.post("http://127.0.0.1:5000/product/add", newproduct);
    return result
  } catch (error) {
    console.log(error)
  }
})

//delete
export const deleteproduct = createAsyncThunk("product/delete", async (id) => {
  try {
    let result = axios.delete(`http://127.0.0.1:5000/product/${id}` );
    return result
  } catch (error) {
    console.log(error)
  }
})
//edit or update

export const editproduct= createAsyncThunk("product/edit", async ({id, edited})=>{
  try {
    let result=axios.put(`http://localhost:5000/product/${id}`, edited);
    return result
  } catch (error) {
    console.log(error)
  }
})


//////////////////////////////////////////////////////////////////////////////////


const initialState = {
  productlist :[],
  status:null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    //getproduct
    .addCase(getproduct.pending, (state) => {
      state.status = "pending";
      })
    .addCase(getproduct.fulfilled, (state, action) => {
      state.status = "success";
      state.productlist = action.payload.data.products; ////users here in database variable
      })
    .addCase(getproduct.rejected, (state) => {
      state.status = "fail";
      })
    //addproduct
    .addCase(addproduct.pending, (state) => {
      state.status = "pending";
      })
    .addCase(addproduct.fulfilled, (state, action) => {
      state.status = "success";
      
      })
    .addCase(addproduct.rejected, (state) => {
      state.status = "fail";
      })
      //delete
      .addCase(deleteproduct.pending, (state) => {
      state.status = "pending";
      })
    .addCase(deleteproduct.fulfilled, (state, action) => {
      state.status = "success";
      
      })
    .addCase(deleteproduct.rejected, (state) => {
      state.status = "fail";
      })
      //edit
      .addCase(editproduct.pending, (state) => {
      state.status = "pending";
      })
    .addCase(editproduct.fulfilled, (state, action) => {
      state.status = "success";
      
      })
    .addCase(editproduct.rejected, (state) => {
      state.status = "fail";
      })
},
})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer