export function searchCar() {
  return {
    type: 'ASYNC_SEARCH_CAR',
  };
}

export function getMake() {
  return {
    type: 'ASYNC_GET_MAKE',
  };
}

export function getModel(action) {
  return {
    type: 'ASYNC_GET_MODEL',
    action,
  };
}

export function getVersion(action) {
    return {
      type: 'ASYNC_GET_VERSION',
      action,
    };
  }

  export function getEstado() {
    return {
      type: 'ASYNC_GET_ESTADO',
    };
  }

  export function getCidade(action) {
    return {
      type: 'ASYNC_GET_CIDADE',
      action,
    };
  }