import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
// We're using our own custom render function and not RTL's render.
import { setupStore } from '../../../redux/store'
import { renderWithProviders } from '../../../redux/utils/test-utils'
import Dashboard from '..'
// import { getWalletCarbonCreditBalance, getWalletDetails, getWalletInterest, getWalletBalance, getWalletTransactions, getWalletCarbonCreditTransactions } from "../../../redux/wallets/actions"
// import { getUserDetails, saveFcmToken, checkInvalidFcmToken } from "../../../redux/users/actions"
import { GET_USER, SAVE_FCM_TOKEN, CHECK_INVALID_FCM_TOKEN } from "../../../redux/users/type"
import { GET_WALLET_CARBON_CREDIT_BALANCE, GET_WALLET_DETAILS, GET_WALLET_INTEREST, GET_WALLET_BALANCE, GET_WALLET_TRANSACTIONS, GET_WALLET_CARBON_CREDIT_TRANSACTIONS } from "../../../redux/wallets/type"


import userReducerState, { userReducer } from '../../../redux/users/reducer'


import walletReducerState, { walletReducer } from '../../../redux/wallets/reducer'



describe('Dashboard component', () => {

  it('renders a view', () => {
    const navigation = { navigate: jest.fn(), navigation: jest.fn(), addListener: jest.fn() };
    renderWithProviders(<Dashboard navigation={navigation} />)
  });


  test('renders correctly', () => {
    const navigation = { navigate: jest.fn(), navigation: jest.fn(), addListener: jest.fn() };


    const tree = renderWithProviders(<Dashboard navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Uses preloaded state to render', () => {
    const navigation = { navigate: jest.fn(), navigation: jest.fn(), addListener: jest.fn() };


    const initialWallet = [{ value: 123123, completed: false }]

    const initialFcm = [{ id: 1, name: test, completed: false }]

    const { getByText } = renderWithProviders(<Dashboard navigation={navigation} />, {
      preloadedState: {
        wallet: initialWallet,
        user: initialFcm
      }
    })
  })



  test('Sets up initial state state with actions ', () => {
    const store = setupStore()
    const navigation = { navigate: jest.fn(), navigation: jest.fn(), addListener: jest.fn() };


    store.dispatch(getUserDetails())
    store.dispatch(saveFcmToken())
    store.dispatch(getWalletBalance())
    store.dispatch(getWalletCarbonCreditBalance())
    store.dispatch(getWalletDetails())
    store.dispatch(getWalletInterest())
    store.dispatch(getWalletTransactions())
    store.dispatch(getWalletCarbonCreditTransactions())
    store.dispatch(checkInvalidFcmToken())

    const { getByText } = renderWithProviders(<Dashboard navigation={navigation} />, { store })

  })


  test('should return the User initial state', () => {
    expect(userReducerState(undefined, { type: undefined })).toEqual(
      {
        login: {
          loading: false,
          result: {},
          error: undefined,
        },

        cognitoRegister: {
          loading: false,
          result: {},
          error: undefined,
        },

        dbRegister: {
          loading: false,
          result: {},
          error: undefined,
        },

        userDetails: {
          loading: false,
          result: {},
          error: undefined,
        },

        resetPassword: {
          loading: false,
          result: {},
          error: undefined,
        },

        resetPasswordNotify: {
          loading: false,
          result: {},
          error: undefined,
        },

        savePayday: {
          error: undefined,
          loading: false,
          result: {},
        },

        heardAboutBobbobFrom: {
          loading: false,
          result: {},
          error: undefined,
        },

        confirmEmail: {
          loading: false,
          result: {},
          error: undefined,
        },

        resendEmail: {
          loading: false,
          result: {},
          error: undefined,
        },

        confirmPhoneno: {
          loading: false,
          result: {},
          error: undefined,
        },

        confirmPhonenoCode: {
          loading: false,
          result: {},
          error: undefined,
        },

        TCAccept: {
          loading: false,
          result: {},
          error: undefined,
        },

        changeStatus: {
          loading: false,
          result: {},
          error: undefined,
        },

        marketingOptIn: {
          loading: false,
          result: {},
          error: undefined,
        },

        employmentInfo: {
          loading: false,
          result: {},
          error: undefined,
        },

        sourceOfFunds: {
          loading: false,
          result: {},
          error: undefined,
        },

        updateEmailSetting: {
          error: undefined,
          loading: false,
          result: {},
        },

        updatePNSetting: {
          error: undefined,
          loading: false,
          result: {},
        },

        userEmployment: {
          loading: false,
          result: {},
          error: undefined,
        },

        userPreferences: {
          loading: false,
          result: {},
          error: undefined,
        },

        recoveryCode: {
          loading: false,
          result: {},
          error: undefined,
        },

        fcmToken: {
          loading: false,
          result: {},
          error: undefined,
        },

        checkFcmToken: {
          loading: false,
          result: {},
          error: undefined,
        },

        list: {
          loading: false,
          result: {},
          error: undefined,
        },
        item: {
          loading: false,
          result: {},
          error: undefined,
        },
      }
    )
  })


  test('should return the Wallet initial state', () => {
    expect(walletReducerState(undefined, { type: undefined })).toEqual(
      {
        "depositInfo": { "error": undefined, "loading": false, "result": {} },
        "depositAccounts": { "error": undefined, "loading": false, "result": {} },
        "walletBalance": { "error": undefined, "loading": false, "result": {} },
        "walletCarbonCreditBalance": { "error": undefined, "loading": false, "result": {} },
        "walletCarbonCreditTransactions": { "error": undefined, "loading": false, "result": {} },
        "walletDetails": { "error": undefined, "loading": false, "result": {} },
        "walletInterest": { "error": undefined, "loading": false, "result": {} },
        "walletThreshold": { "error": undefined, "loading": false, "result": {} },
        "walletTransactions": { "error": undefined, "loading": false, "result": {} },
        "withdrawAccount": { "error": undefined, "loading": false, "result": {} },
        "withdrawAccounts": { "error": undefined, "loading": false, "result": {} },
        "withdrawAmount": { "error": undefined, "loading": false, "result": {} },
        "actualSpending": { "error": undefined, "loading": false, "result": {} },
        "automateDirectDebit": { "error": undefined, "loading": false, "result": {} },
        "manualDirectDebit": { "error": undefined, "loading": false, "result": {} },
        "cancelDirectDebit": { "error": undefined, "loading": false, "result": {} },
        "recurringPlans": { "error": undefined, "loading": false, "result": {} },
        "saveSpendingRoutine": { "error": undefined, "loading": false, "result": {} },
        "saveActualSpending": { "error": undefined, "loading": false, "result": {} },
        "spendingRoutine": { "error": undefined, "loading": false, "result": {} },
        "swydsSubscription": { "error": undefined, "loading": false, "result": {} },
        "transfer": { "error": undefined, "loading": false, "result": {} },
        "exchangeRate": { "error": undefined, "loading": false, "result": {} },
        "salaryDirectDebit": { "error": undefined, "loading": false, "result": {} },
        "salaryEmployer": { "error": undefined, "loading": false, "result": {} },
        "employerMail": { "error": undefined, "loading": false, "result": {} },
        "salarySettings": { "error": undefined, "loading": false, "result": {} },
        "updateSalarySetting": { "error": undefined, "loading": false, "result": {} },
      }
    )
  })

  const thunkMiddleware =
    ({ dispatch, getState }) =>
      next =>
        action => {
          if (typeof action === 'function') {
            return action(dispatch, getState)
          }

          return next(action)
        }

  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()

    const invoke = action => thunkMiddleware(store)(next)(action)

    return { store, next, invoke }
  }


  test('calls the function', () => {
    const { invoke } = create()
    const fn = jest.fn()
    invoke(fn)
    expect(fn).toHaveBeenCalled()
  })

  test('passes User details dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch(GET_USER)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(GET_USER)
    expect(store.getState).toHaveBeenCalled()
  })

  test('passes fcm validation dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch(CHECK_INVALID_FCM_TOKEN)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(CHECK_INVALID_FCM_TOKEN)
    expect(store.getState).toHaveBeenCalled()
  })

  test('passes Fcm token details dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch(SAVE_FCM_TOKEN)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(SAVE_FCM_TOKEN)
    expect(store.getState).toHaveBeenCalled()
  })

  test('passes get wallet carbon credit balance details dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch(GET_WALLET_CARBON_CREDIT_BALANCE)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(GET_WALLET_CARBON_CREDIT_BALANCE)
    expect(store.getState).toHaveBeenCalled()
  })

  test('passes get wallet carbon credit balance details dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch(GET_WALLET_CARBON_CREDIT_BALANCE)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(GET_WALLET_CARBON_CREDIT_BALANCE)
    expect(store.getState).toHaveBeenCalled()
  })

  test('passes get wallet details dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch(GET_WALLET_DETAILS)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(GET_WALLET_DETAILS)
    expect(store.getState).toHaveBeenCalled()
  })

  test('passes get wallet interest dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch(GET_WALLET_INTEREST)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(GET_WALLET_INTEREST)
    expect(store.getState).toHaveBeenCalled()
  })

  test('passes get wallet balance dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch(GET_WALLET_BALANCE)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(GET_WALLET_BALANCE)
    expect(store.getState).toHaveBeenCalled()
  })

  test('passes get wallet transaction dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch(GET_WALLET_TRANSACTIONS)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(GET_WALLET_TRANSACTIONS)
    expect(store.getState).toHaveBeenCalled()
  })

  test('passes get wallet carbon credit transaction dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch(GET_WALLET_CARBON_CREDIT_TRANSACTIONS)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(GET_WALLET_CARBON_CREDIT_TRANSACTIONS)
    expect(store.getState).toHaveBeenCalled()
  })
})

