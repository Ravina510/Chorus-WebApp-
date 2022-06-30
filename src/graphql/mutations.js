/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      name
      status
      type
      address {
        address1
        address2
        city
        stateProvince
        postalCode
        country
      }
      externalReferences
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      name
      status
      type
      address {
        address1
        address2
        city
        stateProvince
        postalCode
        country
      }
      externalReferences
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      name
      status
      type
      address {
        address1
        address2
        city
        stateProvince
        postalCode
        country
      }
      externalReferences
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      avatarKey
      description
      pushToken
      accountID
      userType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      avatarKey
      description
      pushToken
      accountID
      userType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      avatarKey
      description
      pushToken
      accountID
      userType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      name
      status
      title
      email
      phone
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      name
      status
      title
      email
      phone
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      name
      status
      title
      email
      phone
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      value
      type
      parentID
      parentHierarchy
      parentName
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      value
      type
      parentID
      parentHierarchy
      parentName
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      value
      type
      parentID
      parentHierarchy
      parentName
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      udi
      parentHierarchy
      accountID
      mode
      cartridgeLevel
      clo2
      lastShotSize
      temperature
      humidity
      barometricPressure
      metadata {
        id
        name
        udi
        status
        type
        model
        externalReferences
        parentHierarchy
        deviceId
        device {
          id
          udi
          parentHierarchy
          accountID
          mode
          cartridgeLevel
          clo2
          lastShotSize
          temperature
          humidity
          barometricPressure
          metadata {
            id
            name
            udi
            status
            type
            model
            externalReferences
            parentHierarchy
            deviceId
            device {
              id
              udi
              parentHierarchy
              accountID
              mode
              cartridgeLevel
              clo2
              lastShotSize
              temperature
              humidity
              barometricPressure
              metadata {
                id
                name
                udi
                status
                type
                model
                externalReferences
                parentHierarchy
                deviceId
                device {
                  id
                  udi
                  parentHierarchy
                  accountID
                  mode
                  cartridgeLevel
                  clo2
                  lastShotSize
                  temperature
                  humidity
                  barometricPressure
                  metadata {
                    id
                    name
                    udi
                    status
                    type
                    model
                    externalReferences
                    parentHierarchy
                    deviceId
                    locationId
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  commsVersion
                  controllerVersion
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  deviceMetadataId
                }
                locationId
                location {
                  id
                  value
                  type
                  parentID
                  parentHierarchy
                  parentName
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              commsVersion
              controllerVersion
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              deviceMetadataId
            }
            locationId
            location {
              id
              value
              type
              parentID
              parentHierarchy
              parentName
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          commsVersion
          controllerVersion
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          deviceMetadataId
        }
        locationId
        location {
          id
          value
          type
          parentID
          parentHierarchy
          parentName
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      commsVersion
      controllerVersion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      deviceMetadataId
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      udi
      parentHierarchy
      accountID
      mode
      cartridgeLevel
      clo2
      lastShotSize
      temperature
      humidity
      barometricPressure
      metadata {
        id
        name
        udi
        status
        type
        model
        externalReferences
        parentHierarchy
        deviceId
        device {
          id
          udi
          parentHierarchy
          accountID
          mode
          cartridgeLevel
          clo2
          lastShotSize
          temperature
          humidity
          barometricPressure
          metadata {
            id
            name
            udi
            status
            type
            model
            externalReferences
            parentHierarchy
            deviceId
            device {
              id
              udi
              parentHierarchy
              accountID
              mode
              cartridgeLevel
              clo2
              lastShotSize
              temperature
              humidity
              barometricPressure
              metadata {
                id
                name
                udi
                status
                type
                model
                externalReferences
                parentHierarchy
                deviceId
                device {
                  id
                  udi
                  parentHierarchy
                  accountID
                  mode
                  cartridgeLevel
                  clo2
                  lastShotSize
                  temperature
                  humidity
                  barometricPressure
                  metadata {
                    id
                    name
                    udi
                    status
                    type
                    model
                    externalReferences
                    parentHierarchy
                    deviceId
                    locationId
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  commsVersion
                  controllerVersion
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  deviceMetadataId
                }
                locationId
                location {
                  id
                  value
                  type
                  parentID
                  parentHierarchy
                  parentName
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              commsVersion
              controllerVersion
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              deviceMetadataId
            }
            locationId
            location {
              id
              value
              type
              parentID
              parentHierarchy
              parentName
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          commsVersion
          controllerVersion
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          deviceMetadataId
        }
        locationId
        location {
          id
          value
          type
          parentID
          parentHierarchy
          parentName
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      commsVersion
      controllerVersion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      deviceMetadataId
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      udi
      parentHierarchy
      accountID
      mode
      cartridgeLevel
      clo2
      lastShotSize
      temperature
      humidity
      barometricPressure
      metadata {
        id
        name
        udi
        status
        type
        model
        externalReferences
        parentHierarchy
        deviceId
        device {
          id
          udi
          parentHierarchy
          accountID
          mode
          cartridgeLevel
          clo2
          lastShotSize
          temperature
          humidity
          barometricPressure
          metadata {
            id
            name
            udi
            status
            type
            model
            externalReferences
            parentHierarchy
            deviceId
            device {
              id
              udi
              parentHierarchy
              accountID
              mode
              cartridgeLevel
              clo2
              lastShotSize
              temperature
              humidity
              barometricPressure
              metadata {
                id
                name
                udi
                status
                type
                model
                externalReferences
                parentHierarchy
                deviceId
                device {
                  id
                  udi
                  parentHierarchy
                  accountID
                  mode
                  cartridgeLevel
                  clo2
                  lastShotSize
                  temperature
                  humidity
                  barometricPressure
                  metadata {
                    id
                    name
                    udi
                    status
                    type
                    model
                    externalReferences
                    parentHierarchy
                    deviceId
                    locationId
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  commsVersion
                  controllerVersion
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  deviceMetadataId
                }
                locationId
                location {
                  id
                  value
                  type
                  parentID
                  parentHierarchy
                  parentName
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              commsVersion
              controllerVersion
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              deviceMetadataId
            }
            locationId
            location {
              id
              value
              type
              parentID
              parentHierarchy
              parentName
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          commsVersion
          controllerVersion
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          deviceMetadataId
        }
        locationId
        location {
          id
          value
          type
          parentID
          parentHierarchy
          parentName
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      commsVersion
      controllerVersion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      deviceMetadataId
    }
  }
`;
export const createDeviceMetadata = /* GraphQL */ `
  mutation CreateDeviceMetadata(
    $input: CreateDeviceMetadataInput!
    $condition: ModelDeviceMetadataConditionInput
  ) {
    createDeviceMetadata(input: $input, condition: $condition) {
      id
      name
      udi
      status
      type
      model
      externalReferences
      parentHierarchy
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      locationId
      location {
        id
        value
        type
        parentID
        parentHierarchy
        parentName
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDeviceMetadata = /* GraphQL */ `
  mutation UpdateDeviceMetadata(
    $input: UpdateDeviceMetadataInput!
    $condition: ModelDeviceMetadataConditionInput
  ) {
    updateDeviceMetadata(input: $input, condition: $condition) {
      id
      name
      udi
      status
      type
      model
      externalReferences
      parentHierarchy
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      locationId
      location {
        id
        value
        type
        parentID
        parentHierarchy
        parentName
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDeviceMetadata = /* GraphQL */ `
  mutation DeleteDeviceMetadata(
    $input: DeleteDeviceMetadataInput!
    $condition: ModelDeviceMetadataConditionInput
  ) {
    deleteDeviceMetadata(input: $input, condition: $condition) {
      id
      name
      udi
      status
      type
      model
      externalReferences
      parentHierarchy
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      locationId
      location {
        id
        value
        type
        parentID
        parentHierarchy
        parentName
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDeviceTelemetry = /* GraphQL */ `
  mutation CreateDeviceTelemetry(
    $input: CreateDeviceTelemetryInput!
    $condition: ModelDeviceTelemetryConditionInput
  ) {
    createDeviceTelemetry(input: $input, condition: $condition) {
      id
      clo2 {
        label
        value
        uom
        icon
      }
      temperature {
        label
        value
        uom
        icon
      }
      humidity {
        label
        value
        uom
        icon
      }
      barometricPressure {
        label
        value
        uom
        icon
      }
      generated
      lastShotSize {
        label
        value
        uom
        icon
      }
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      eventDate
      rawEvent
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDeviceTelemetry = /* GraphQL */ `
  mutation UpdateDeviceTelemetry(
    $input: UpdateDeviceTelemetryInput!
    $condition: ModelDeviceTelemetryConditionInput
  ) {
    updateDeviceTelemetry(input: $input, condition: $condition) {
      id
      clo2 {
        label
        value
        uom
        icon
      }
      temperature {
        label
        value
        uom
        icon
      }
      humidity {
        label
        value
        uom
        icon
      }
      barometricPressure {
        label
        value
        uom
        icon
      }
      generated
      lastShotSize {
        label
        value
        uom
        icon
      }
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      eventDate
      rawEvent
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDeviceTelemetry = /* GraphQL */ `
  mutation DeleteDeviceTelemetry(
    $input: DeleteDeviceTelemetryInput!
    $condition: ModelDeviceTelemetryConditionInput
  ) {
    deleteDeviceTelemetry(input: $input, condition: $condition) {
      id
      clo2 {
        label
        value
        uom
        icon
      }
      temperature {
        label
        value
        uom
        icon
      }
      humidity {
        label
        value
        uom
        icon
      }
      barometricPressure {
        label
        value
        uom
        icon
      }
      generated
      lastShotSize {
        label
        value
        uom
        icon
      }
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      eventDate
      rawEvent
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDeviceConfiguration = /* GraphQL */ `
  mutation CreateDeviceConfiguration(
    $input: CreateDeviceConfigurationInput!
    $condition: ModelDeviceConfigurationConditionInput
  ) {
    createDeviceConfiguration(input: $input, condition: $condition) {
      id
      rawEvent
      eventDate
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      telemetryPublishRateMs
      parameterPollingRateMs
      commsVersion
      controllerVersion
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDeviceConfiguration = /* GraphQL */ `
  mutation UpdateDeviceConfiguration(
    $input: UpdateDeviceConfigurationInput!
    $condition: ModelDeviceConfigurationConditionInput
  ) {
    updateDeviceConfiguration(input: $input, condition: $condition) {
      id
      rawEvent
      eventDate
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      telemetryPublishRateMs
      parameterPollingRateMs
      commsVersion
      controllerVersion
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDeviceConfiguration = /* GraphQL */ `
  mutation DeleteDeviceConfiguration(
    $input: DeleteDeviceConfigurationInput!
    $condition: ModelDeviceConfigurationConditionInput
  ) {
    deleteDeviceConfiguration(input: $input, condition: $condition) {
      id
      rawEvent
      eventDate
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      telemetryPublishRateMs
      parameterPollingRateMs
      commsVersion
      controllerVersion
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDeviceState = /* GraphQL */ `
  mutation CreateDeviceState(
    $input: CreateDeviceStateInput!
    $condition: ModelDeviceStateConditionInput
  ) {
    createDeviceState(input: $input, condition: $condition) {
      id
      mode
      cartridgeLevel {
        label
        value
        uom
        icon
      }
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      eventDate
      rawEvent
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDeviceState = /* GraphQL */ `
  mutation UpdateDeviceState(
    $input: UpdateDeviceStateInput!
    $condition: ModelDeviceStateConditionInput
  ) {
    updateDeviceState(input: $input, condition: $condition) {
      id
      mode
      cartridgeLevel {
        label
        value
        uom
        icon
      }
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      eventDate
      rawEvent
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDeviceState = /* GraphQL */ `
  mutation DeleteDeviceState(
    $input: DeleteDeviceStateInput!
    $condition: ModelDeviceStateConditionInput
  ) {
    deleteDeviceState(input: $input, condition: $condition) {
      id
      mode
      cartridgeLevel {
        label
        value
        uom
        icon
      }
      deviceId
      device {
        id
        udi
        parentHierarchy
        accountID
        mode
        cartridgeLevel
        clo2
        lastShotSize
        temperature
        humidity
        barometricPressure
        metadata {
          id
          name
          udi
          status
          type
          model
          externalReferences
          parentHierarchy
          deviceId
          device {
            id
            udi
            parentHierarchy
            accountID
            mode
            cartridgeLevel
            clo2
            lastShotSize
            temperature
            humidity
            barometricPressure
            metadata {
              id
              name
              udi
              status
              type
              model
              externalReferences
              parentHierarchy
              deviceId
              device {
                id
                udi
                parentHierarchy
                accountID
                mode
                cartridgeLevel
                clo2
                lastShotSize
                temperature
                humidity
                barometricPressure
                metadata {
                  id
                  name
                  udi
                  status
                  type
                  model
                  externalReferences
                  parentHierarchy
                  deviceId
                  device {
                    id
                    udi
                    parentHierarchy
                    accountID
                    mode
                    cartridgeLevel
                    clo2
                    lastShotSize
                    temperature
                    humidity
                    barometricPressure
                    commsVersion
                    controllerVersion
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    deviceMetadataId
                  }
                  locationId
                  location {
                    id
                    value
                    type
                    parentID
                    parentHierarchy
                    parentName
                    accountID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  accountID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                commsVersion
                controllerVersion
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                deviceMetadataId
              }
              locationId
              location {
                id
                value
                type
                parentID
                parentHierarchy
                parentName
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            commsVersion
            controllerVersion
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            deviceMetadataId
          }
          locationId
          location {
            id
            value
            type
            parentID
            parentHierarchy
            parentName
            accountID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commsVersion
        controllerVersion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deviceMetadataId
      }
      eventDate
      rawEvent
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUserPreference = /* GraphQL */ `
  mutation CreateUserPreference(
    $input: CreateUserPreferenceInput!
    $condition: ModelUserPreferenceConditionInput
  ) {
    createUserPreference(input: $input, condition: $condition) {
      id
      user_id
      dark_mode
      low_cartridge
      high_temperature
      low_temperature
      device_disconnected
      default_location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserPreference = /* GraphQL */ `
  mutation UpdateUserPreference(
    $input: UpdateUserPreferenceInput!
    $condition: ModelUserPreferenceConditionInput
  ) {
    updateUserPreference(input: $input, condition: $condition) {
      id
      user_id
      dark_mode
      low_cartridge
      high_temperature
      low_temperature
      device_disconnected
      default_location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserPreference = /* GraphQL */ `
  mutation DeleteUserPreference(
    $input: DeleteUserPreferenceInput!
    $condition: ModelUserPreferenceConditionInput
  ) {
    deleteUserPreference(input: $input, condition: $condition) {
      id
      user_id
      dark_mode
      low_cartridge
      high_temperature
      low_temperature
      device_disconnected
      default_location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNotifications = /* GraphQL */ `
  mutation CreateNotifications(
    $input: CreateNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    createNotifications(input: $input, condition: $condition) {
      id
      userPreferenceId
      token
      deviceId
      type
      value
      active
      lastSent
      isSeen
      isClicked
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNotifications = /* GraphQL */ `
  mutation UpdateNotifications(
    $input: UpdateNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    updateNotifications(input: $input, condition: $condition) {
      id
      userPreferenceId
      token
      deviceId
      type
      value
      active
      lastSent
      isSeen
      isClicked
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNotifications = /* GraphQL */ `
  mutation DeleteNotifications(
    $input: DeleteNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    deleteNotifications(input: $input, condition: $condition) {
      id
      userPreferenceId
      token
      deviceId
      type
      value
      active
      lastSent
      isSeen
      isClicked
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
