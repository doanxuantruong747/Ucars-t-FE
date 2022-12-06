import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { cloudinaryUpload } from "../../untils/cloudinary";



let initialState = {
  isLoading: false,
  error: null,
  listCarBrands: [],
  selectedCarBrand: null,
  CarBrandError: null,
  countCarBrand: null
};

const slice = createSlice({
  name: "carBrand",
  initialState,
  reducers: {
    // set loading
    startLoading(state) {
      state.isLoading = true;
    },
    // has Error
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // get Car Brand Success
    getCarBrandSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { carBrands, count } = action.payload;
      state.listCarBrands = carBrands;
      state.countCarBrand = count;
    },

    // create CarBrand Success
    createCarBrandSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      const newCarBrand = action.payload;

      state.CarBrandError = true
      state.listCarBrands.unshift(newCarBrand._id);
    },

    // Create CarBrand Error
    createCarBrandError(state, action) {
      state.isLoading = false;
      state.error = null;
      state.CarBrandError = false

    },

    //reset 
    reset(state, action) {
      state.isLoading = false;
      state.error = null;
      state.CarBrandError = null

    },

    // reset Car Brand -> listCarBrands = []
    resetCarBrand(state, action) {
      state.isLoading = false;
      state.error = null;
      state.listCarBrands = [];
    },

    // get Single Car Brand Success
    getSingleCarBrandSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.selectedCarBrand = action.payload;
    },

    // updata Car Brand Success
    updataCarBrandSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

    },

    // delete Car Brand Success
    deleteCarBrandSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      state.listCarBrands.shift();
    },



  }
});


export default slice.reducer;

// add new car brand
export const createCarBrand =
  ({ name, image, description, status }) =>
    async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {


        const imageUrl = await cloudinaryUpload(image);
        const response = await apiService.post("/carBrand", {
          name, description, status,
          image: imageUrl,
        });

        if (response.data.addCarBrand === false) {
          return dispatch(slice.actions.createCarBrandError(response.data))
        }
        dispatch(slice.actions.createCarBrandSuccess(response.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error.message));

      }
    };


// get list car brands
export const getCarBrands =
  ({ page = 1, limit = 10, name }) =>
    async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const params = { page, name, limit };
        if (name) params.name = name;

        const response = await apiService.get(`/carBrand`, { params });
        if (page === 1) dispatch(slice.actions.resetCarBrand());
        dispatch(slice.actions.getCarBrandSuccess(response.data));

      } catch (error) {
        dispatch(slice.actions.hasError(error.message));

      }
    };

// get Single Car Brand
export const getSingleCarBrand =
  (id) =>
    async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await apiService.get(`/carBrand/detail/${id}`);
        dispatch(slice.actions.getSingleCarBrandSuccess(response.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error.message));

      }
    };


// Edit Car Brand   
export const EditCarBrand =
  ({ id, name, image, description, status }) =>
    async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const data = { name, image, description, status }

        if (image instanceof File) {
          const imageUrl = await cloudinaryUpload(image);
          data.image = imageUrl;
        }

        const response = await apiService.put(`/carBrand/${id}`, data);
        dispatch(slice.actions.updataCarBrandSuccess(response.data))

      } catch (error) {
        dispatch(slice.actions.hasError(error.message));

      }
    };


// delete car brand
export const deleteCarBrand =
  (id) =>
    async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await apiService.delete(`/carBrand/${id}`);
        dispatch(slice.actions.deleteCarBrandSuccess(response.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error.message));
      }
    };

// function reset carError
export const resetCarError =
  () => (dispatch) => {

    try {
      dispatch(slice.actions.reset());

    } catch (error) {
      dispatch(slice.actions.hasError(error.message));

    }
  };