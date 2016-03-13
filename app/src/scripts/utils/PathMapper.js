export function checkPath(nextState, replace) {
  const pathFromServer = document.getElementById('path').value
  const currentPath = window.location.pathname

  if (pathFromServer !== currentPath) {
    replace({
      pathname: pathFromServer
    })
  }
}
