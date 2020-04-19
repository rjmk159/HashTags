import { createSlice } from '@reduxjs/toolkit';

// import { urlRegex } from 'web/_const/const';
// import store from '../../store';

const { actions, reducer } = createSlice({
  name: 'dataSso',
  initialState: {
    step: 1,
    service: '',
    provider: '',
    configureFields: null,
    update_profile: true,
    update_username: true,
    update_email: true,
    showLoading: false,
    enableConfigureButton: false,
    notification: {
      show: false,
      type: '',
      message: ''
    }
  },
  reducers: {
    showLoader: (state, { payload }) => {
      state.showLoading = payload.status;
    },
    setStep: (state, { payload }) => {
      state.step = payload;
    },
    setService: (state, { payload }) => {
      state.service = payload;
    },
    setProvider: (state, { payload }) => {
      state.provider = payload;
    },
    setUserUpdated: (state, { payload }) => {
      state[payload.updateType] = payload.status;
    },
    setNotification: (state, { payload }) => {
      state.notification = payload;
      state.showLoading = false;
    },
    configureSettings: (state, { payload }) => {
      state.configureFields = payload.data;
      state.showLoading = false;
      if (payload.editRequest) {
        state.service = payload.data.connection_type;
        state.provider = payload.data.idp_name;
      }
    },
    setInputs: (state, { payload }) => {
      if (state.configureFields && state.configureFields.idp_params && state.configureFields.idp_params[payload.key]) {
        state.configureFields.idp_params[payload.key][payload.newKey] = payload.value;
      }
    },
    setEnableConfigureButtonStatus: (state, { payload }) => {
      state.enableConfigureButton = payload;
    }
  }
});

export default reducer;

export const {
  showLoader,
  setStep,
  setService,
  setProvider,
  setUserUpdated,
  setNotification,
  configureSettings,
  setInputs,
  setEnableConfigureButtonStatus
} = actions;

const errorHandlerObj = () => {
  let obj = {
    message: 'Something went wrong! please try again or refresh the page',
    type: 'error',
    show: true
  };
  return obj;
};

// export const checkConfigureValidations = () => (dispatch) => {
//   let state = { ...store.getState() };
//   let inputArray = [];
//   if (state && state.dataSso && state.dataSso.configureFields) {
//     let obj = { ...state.dataSso.configureFields.idp_params };
//     Object.keys(obj).forEach((key) => {
//       if (obj[key].required) {
//         if (!obj[key].value || obj[key].value === '') {
//           inputArray.push(false);
//         } else {
//           inputArray.push(true);
//         }
//       } else {
//         inputArray.push(true);
//       }
//     });
//     return dispatch(setEnableConfigureButtonStatus(inputArray.length && !inputArray.includes(false)));
//   }
// };
// export const checkUrlValidations = () => (dispatch) => {
//   let state = { ...store.getState() };
//   var inputArray = [];
//   var validUrl;
//   if (state && state.dataSso && state.dataSso.configureFields) {
//     let obj = { ...state.dataSso.configureFields.idp_params };
//     Object.keys(obj).forEach((key) => {
//       if (obj[key].value && obj[key].name === 'url') {
//         if (!urlRegex.test(obj[key].value)) {
//           validUrl = false;
//           inputArray.push(false);
//         } else {
//           validUrl = true;
//           inputArray.push(true);
//         }
//         dispatch(setInputs({ key, value: validUrl, newKey: 'validUrl' }));
//       }
//     });
//   }
//   return inputArray.length && !inputArray.includes(false);
// };
// export const saveConfig = (data) => async (dispatch) => {
//   dispatch(showLoader({ status: true }));
//   try {
//     const response = await saveSsoConfiguration(data);
//     if (response) {
//       window.location = '/accounts/settings?type=security';
//     }
//   } catch (error) {
//     let obj = errorHandlerObj();
//     dispatch(setNotification(obj));
//   }
// };
// export const setConfigureSettings = (provider, service, editRequest) => async (dispatch) => {
//   dispatch(showLoader({ status: true }));
//   try {
//     const payload = await getSamlIdentityProvider(provider, service, editRequest);
//     if (payload.data) {
//       dispatch(configureSettings({ data: payload.data, editRequest }));
//       dispatch(setStep(3));
//     } else if (payload.error_message) {
//       if (!editRequest) {
//         let obj = errorHandlerObj();
//         dispatch(setNotification(obj));
//       }
//       dispatch(setStep(1));
//     }
//   } catch (error) {
//     let obj = errorHandlerObj();
//     dispatch(setNotification(obj));
//   }
// };
// export const sendIdpSuggesstion = (step, value, callback) => async () => {
//   try {
//     const response = await idpSuggesstion(step, value);
//     if (response.success && response.data.suggesion_saved) {
//       callback(false);
//     } else {
//       callback(true);
//     }
//   } catch (error) {
//     callback(true);
//   }
// };
// export const sendInitGoogleOAuth = (callback) => async (dispatch) => {
//   dispatch(showLoader({ status: true }));
//   try {
//     const response = await initGoogleOAuth();
//     if (response.success && response.data.google_oauth_init) {
//       callback(false);
//     } else {
//       callback(true);
//     }
//   } catch (error) {
//     callback(true);
//   }
// };

// export const closeNotificationBar = () => (dispatch) => {
//   let obj = {
//     show: false,
//     message: '',
//     type: ''
//   };
//   dispatch(setNotification(obj));
// };
