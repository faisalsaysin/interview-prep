## Authentication and Authorization: -

_Q1 - How would you handle authentication and authorization in a Web API integration, considering factors like security, scalability, and ease of implementation?_

A1 - Authentication:JWT (JSON Web Tokens):
Security: Secure the tokens using HTTPS. Store the token securely in HttpOnly cookies.
Scalability: JWT is stateless; no session data needs to be stored on the server, making it highly scalable.
Ease of implementation: Many libraries (e.g., jsonwebtoken) simplify token generation and verification.

How it works:

User logs in with credentials (or social login like OAuth2).
Server returns a JWT signed with a secret.
React app stores the token securely.
Include the token in the Authorization header (Bearer token) for subsequent API requests.
Server verifies the token on each request.

OAuth2/OpenID Connect:

Security: OAuth2 allows integrating third-party authentication providers (Google, GitHub). Use PKCE flow for secure communication.
Scalability: Offloads authentication complexity to external providers.
Ease of implementation: Use libraries like react-oauth/google or react-oauth/github.
How it works:

User signs in via an OAuth provider.
You receive an access token from the provider, which you can use for API requests. Authorization:
Role-Based Access Control (RBAC):

Security: Protect sensitive routes by assigning roles (e.g., admin, user).
Scalability: Roles can be easily added and managed in a database.
Ease of implementation: Check the user’s role from the decoded JWT or use an API call to verify access before rendering protected routes.
How it works:

Include roles or permissions in the JWT payload.
On the React side, protect routes using role-based conditions, e.g., if (user.role === 'admin').

## Accessibility: -

_Q1 - Why we do require Accessibility?_

A1 - Inclusivity: Accessibility (a11y) ensures that all users, including those with disabilities (visual, auditory, cognitive, or motor)
Legal Compliance: In many countries, there are legal requirements, such as the Americans with Disabilities Act (ADA) in the U.S. and the Web Content Accessibility Guidelines (WCAG) globally. Failing to make a site accessible can lead to legal actions.
SEO Benefits: Accessibility and SEO often go hand-in-hand. Techniques like using semantic HTML, alt text for images, and descriptive headings also help search engines crawl and rank content better.

_Q2 - How to Handle Accessibility in Development?_

A2 - Use Semantic HTML: Using correct HTML tags (e.g., <header>, <nav>, <article>, <section>) helps assistive technologies, like screen readers, better understand your page's structure.
Keyboard Navigation: Ensure that all functionality is accessible via the keyboard. Many users with disabilities rely on keyboard navigation.
ARIA (Accessible Rich Internet Applications): Use ARIA attributes to enhance accessibility for complex UI elements. such as role="button" aria-hidden.
Alt Text for Images: Every image should have descriptive alt text unless it’s purely decorative, in which case it should have alt="".
Accessible Forms: Always associate form inputs with labels using the for attribute or wrap inputs inside a label tag.

_Q3 - How can we test if accessibility standards are followed_

A3 - Lighthouse and testing navigation through keyboards.

## Browser

_Q1 - What happens when some hits a url in browser?_

A1 - Firstly the browser does a (Domain name system) lookup in DNS cache if not found then DNS server and if not found the it sends a request to the internet to look for IP address. Then it estabilishes TCP connection with server which helps browser connect with server using HTTP request with either get or post method along with other datas. The server recieves the request and send the request to backend and then backend reads the request and responds with JSON/HTML with a status code which is read by frontend system and accordingly rendered on the screen.
