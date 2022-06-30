/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAccounts = /* GraphQL */ `
  query SyncAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncContacts = /* GraphQL */ `
  query SyncContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const locationsByTenant = /* GraphQL */ `
  query LocationsByTenant(
    $accountID: String!
    $valueTypeParentID: ModelLocationLocationsByTenantCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    locationsByTenant(
      accountID: $accountID
      valueTypeParentID: $valueTypeParentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
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
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDevices = /* GraphQL */ `
  query SyncDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDevices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const devicesByTenant = /* GraphQL */ `
  query DevicesByTenant(
    $accountID: String!
    $modeClo2CartridgeLevel: ModelDeviceDevicesByTenantCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    devicesByTenant(
      accountID: $accountID
      modeClo2CartridgeLevel: $modeClo2CartridgeLevel
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDeviceMetadata = /* GraphQL */ `
  query GetDeviceMetadata($id: ID!) {
    getDeviceMetadata(id: $id) {
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
export const listDeviceMetadata = /* GraphQL */ `
  query ListDeviceMetadata(
    $filter: ModelDeviceMetadataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceMetadata(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDeviceMetadata = /* GraphQL */ `
  query SyncDeviceMetadata(
    $filter: ModelDeviceMetadataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeviceMetadata(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const metadataByTenant = /* GraphQL */ `
  query MetadataByTenant(
    $accountID: String!
    $udi: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDeviceMetadataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    metadataByTenant(
      accountID: $accountID
      udi: $udi
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDeviceTelemetry = /* GraphQL */ `
  query GetDeviceTelemetry($id: ID!) {
    getDeviceTelemetry(id: $id) {
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
export const listDeviceTelemetries = /* GraphQL */ `
  query ListDeviceTelemetries(
    $filter: ModelDeviceTelemetryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceTelemetries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        eventDate
        rawEvent
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDeviceTelemetries = /* GraphQL */ `
  query SyncDeviceTelemetries(
    $filter: ModelDeviceTelemetryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeviceTelemetries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        eventDate
        rawEvent
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const deviceTelemetryByDate = /* GraphQL */ `
  query DeviceTelemetryByDate(
    $deviceId: ID!
    $eventDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDeviceTelemetryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deviceTelemetryByDate(
      deviceId: $deviceId
      eventDate: $eventDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        eventDate
        rawEvent
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const deviceTelemetryByTenant = /* GraphQL */ `
  query DeviceTelemetryByTenant(
    $accountID: String!
    $eventDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDeviceTelemetryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deviceTelemetryByTenant(
      accountID: $accountID
      eventDate: $eventDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        eventDate
        rawEvent
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDeviceConfiguration = /* GraphQL */ `
  query GetDeviceConfiguration($id: ID!) {
    getDeviceConfiguration(id: $id) {
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
export const listDeviceConfigurations = /* GraphQL */ `
  query ListDeviceConfigurations(
    $filter: ModelDeviceConfigurationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceConfigurations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDeviceConfigurations = /* GraphQL */ `
  query SyncDeviceConfigurations(
    $filter: ModelDeviceConfigurationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeviceConfigurations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const deviceConfigByDate = /* GraphQL */ `
  query DeviceConfigByDate(
    $deviceId: ID!
    $eventDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDeviceConfigurationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deviceConfigByDate(
      deviceId: $deviceId
      eventDate: $eventDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const deviceConfigByTenant = /* GraphQL */ `
  query DeviceConfigByTenant(
    $accountID: String!
    $eventDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDeviceConfigurationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deviceConfigByTenant(
      accountID: $accountID
      eventDate: $eventDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDeviceState = /* GraphQL */ `
  query GetDeviceState($id: ID!) {
    getDeviceState(id: $id) {
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
export const listDeviceStates = /* GraphQL */ `
  query ListDeviceStates(
    $filter: ModelDeviceStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        eventDate
        rawEvent
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDeviceStates = /* GraphQL */ `
  query SyncDeviceStates(
    $filter: ModelDeviceStateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeviceStates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        eventDate
        rawEvent
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const deviceStateByDate = /* GraphQL */ `
  query DeviceStateByDate(
    $deviceId: ID!
    $eventDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDeviceStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deviceStateByDate(
      deviceId: $deviceId
      eventDate: $eventDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        eventDate
        rawEvent
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const deviceStateByTenant = /* GraphQL */ `
  query DeviceStateByTenant(
    $accountID: String!
    $eventDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDeviceStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deviceStateByTenant(
      accountID: $accountID
      eventDate: $eventDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        eventDate
        rawEvent
        accountID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserPreference = /* GraphQL */ `
  query GetUserPreference($id: ID!) {
    getUserPreference(id: $id) {
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
export const listUserPreferences = /* GraphQL */ `
  query ListUserPreferences(
    $filter: ModelUserPreferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserPreferences = /* GraphQL */ `
  query SyncUserPreferences(
    $filter: ModelUserPreferenceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserPreferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getNotifications = /* GraphQL */ `
  query GetNotifications($id: ID!) {
    getNotifications(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;


export const queryDevicesByAccId = (accountID) => {
    return `query {
      listDevices(filter: {accountID: {eq: "`+accountID+`"}}) {
        items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          deviceMetadataId
        }
        nextToken
        startedAt
        }
    }`
  }
  
  export const queryCurrentTelemetryByDevIdAccId = (accountID,deviceUUID) => {
    return `query {
      listDevices(filter: {id: {eq: "`+deviceUUID+`"}, accountID: {eq: "`+accountID+`"}}) {
        items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          deviceMetadataId
        }
        nextToken
        startedAt
        }
    }`
  }
  
  export const queryHistoricalTelemetryByDevIdAccIdTime = (accountID,deviceId,fromTime,currentTime,limitVal) => {
    if(deviceId == 0){  //for DeviceEventReport deviceId
      console.log("queryHistoricalTelemetryByDevIdAccIdTime - deviceId: ",deviceId);
      return `query {
        listDeviceTelemetries(limit: 30000,filter: {accountID: {eq: "`+accountID+`"},eventDate: {between: ["`+fromTime+`","`+currentTime+`"]}}) {
          items {
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
          eventDate
          rawEvent
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
        }
      }`
    }else{
      return `query {
        deviceTelemetryByDate(deviceId: "`+deviceId+`", eventDate: {between: ["`+fromTime+`","`+currentTime+`"]},limit:`+limitVal+`,sortDirection: DESC) {
          items {
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
              locationId
              accountID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
        nextToken
        startedAt
        }
      }`
    }
  }
  
  export const queryHistoricalTelemetryForReports = (deviceId, accountID,fromTime,currentTime,limit,nextToken) => {
    if(nextToken == ''){ 
      console.log("queryHistoricalTelemetryForReports - deviceId: ",deviceId);
      return `query {
        deviceTelemetryByDate(deviceId: "`+deviceId+`", eventDate: {between: ["`+fromTime+`","`+currentTime+`"]},filter: {accountID: {eq: "`+accountID+`"}},limit:`+limit+`,sortDirection: DESC) {
          items {
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
                locationId
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
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
          nextToken
          startedAt
        }
      }`
    }
    else{ 
      return `query {
        deviceTelemetryByDate(deviceId: "`+deviceId+`", eventDate: {between: ["`+fromTime+`","`+currentTime+`"]},filter: {accountID: {eq: "`+accountID+`"}},limit:`+limit+`,nextToken:"`+nextToken+`", sortDirection: DESC) {
          items {
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
                locationId
                accountID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
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
          nextToken
          startedAt
        }
      }`
    }
  }
  
  export const queryDeviceForLocationDevicesId  = (locationDevicesId,accountId) => {
    return `query {
      listDevices(filter: {parentHierarchy: {contains: "`+locationDevicesId+`"},accountID: {eq: "`+accountId+`"}}) {
        items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          deviceMetadataId
        }
        nextToken
        startedAt
      }
    }`
  }
  
  export const listLocationsByAccId= (accountId) => {
  return `query {
    listLocations(filter: {accountID: {eq: "`+accountId+`"}}) {
      items {
          id
          value
          type
          parentID
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
    }
   }`
  }
