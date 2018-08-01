import fetch from "cross-fetch";

class HttpService {
    // static APIBase = (window.location.hostname === "localhost" ? "http://localhost:8080" : "") + "/api";
    static APIBase = "/MarryingMegan/api";

    static post(url, data) {
        return fetch(HttpService.APIBase + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if(response.ok) {
                return response.json();
            }

            throw new Error(response.status + " " + response.statusText);
        });
    }
}

export default HttpService;