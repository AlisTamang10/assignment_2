Cypress.Commands.add('restoreSessionFromCookies', () => {
  cy.fixture('cookies.json').then((cookies) => {
    cookies.forEach((cookie) => {
      // restore only valid cookies
      cy.setCookie(cookie.name, cookie.value, {
        domain: cookie.domain,
        path: cookie.path,
        secure: cookie.secure,
        httpOnly: cookie.httpOnly
        // skip expiry to avoid invalid cookie issues
      });
    });
  });
});
