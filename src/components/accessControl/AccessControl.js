const AccessControl = ({ userPermission, allowedPermissions, children }) => {
  return allowedPermissions.includes(userPermission) ? children : null
}

export default AccessControl
