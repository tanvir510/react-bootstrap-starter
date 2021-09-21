import { useState } from "react";
import Loading from "../components/Loading";

const Home = () => {
    // To activate loading loading status will be true
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);

    return (
        <div className="page-wrapper">
            {/* Task input area start from here */}
            <div className="task-input-area d-flex align-itmes-center pb-3 pb-md-5">
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="Add a task..."
                    className="form-control me-2 me-md-3"
                />
                <button type="submit">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.000976562 13.714V8.38H8.38098V0H13.754V8.38H22.137V13.714H13.754V22.136H8.37799V13.714H0.000976562Z"
                            fill="#1178E2"
                        />
                    </svg>
                </button>
            </div>

            {/* Task show area start from here */}
            <div className="task-show-area">
                <div className="check-area">
                    <input type="checkbox" checked className="custom-checkbox" name="checkTask" id="checkTask" />
                </div>
                <div className="title-area"> Task number one</div>
                <div className="delete-area">
                    <button type="reset">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity="0.5"
                                d="M0.37257 4.11132L4.14427 0.339621L10.0698 6.26518L15.9954 0.339621L19.7947 4.13894L13.8691 10.0645L19.7968 15.9922L16.0251 19.7639L10.0974 13.8362L4.14219 19.7914L0.340762 15.99L6.29601 10.0348L0.37257 4.11132Z"
                                fill="#666E76"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Task show area start from here */}
            <div className="task-show-area">
                <div className="check-area">
                    <input type="checkbox" className="custom-checkbox" name="checkTask" id="checkTask" />
                </div>
                <div className="title-area"> Task number Two</div>
                <div className="delete-area">
                    <button type="reset">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity="0.5"
                                d="M0.37257 4.11132L4.14427 0.339621L10.0698 6.26518L15.9954 0.339621L19.7947 4.13894L13.8691 10.0645L19.7968 15.9922L16.0251 19.7639L10.0974 13.8362L4.14219 19.7914L0.340762 15.99L6.29601 10.0348L0.37257 4.11132Z"
                                fill="#666E76"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Task show area start from here */}
            <div className="task-show-area">
                <div className="check-area">
                    <input type="checkbox" checked className="custom-checkbox" name="checkTask" id="checkTask" />
                </div>
                <div className="title-area"> Task number Three</div>
                <div className="delete-area">
                    <button type="reset">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity="0.5"
                                d="M0.37257 4.11132L4.14427 0.339621L10.0698 6.26518L15.9954 0.339621L19.7947 4.13894L13.8691 10.0645L19.7968 15.9922L16.0251 19.7639L10.0974 13.8362L4.14219 19.7914L0.340762 15.99L6.29601 10.0348L0.37257 4.11132Z"
                                fill="#666E76"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Task show area start from here */}
            <div className="task-show-area">
                <div className="check-area">
                    <input type="checkbox" className="custom-checkbox" name="checkTask" id="checkTask" />
                </div>
                <div className="title-area"> Task number four</div>
                <div className="delete-area">
                    <button type="reset">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity="0.5"
                                d="M0.37257 4.11132L4.14427 0.339621L10.0698 6.26518L15.9954 0.339621L19.7947 4.13894L13.8691 10.0645L19.7968 15.9922L16.0251 19.7639L10.0974 13.8362L4.14219 19.7914L0.340762 15.99L6.29601 10.0348L0.37257 4.11132Z"
                                fill="#666E76"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Task show area start from here */}
            <div className="task-show-area">
                <div className="check-area">
                    <input type="checkbox" className="custom-checkbox" name="checkTask" id="checkTask" />
                </div>
                <div className="title-area"> Task number five</div>
                <div className="delete-area">
                    <button type="reset">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity="0.5"
                                d="M0.37257 4.11132L4.14427 0.339621L10.0698 6.26518L15.9954 0.339621L19.7947 4.13894L13.8691 10.0645L19.7968 15.9922L16.0251 19.7639L10.0974 13.8362L4.14219 19.7914L0.340762 15.99L6.29601 10.0348L0.37257 4.11132Z"
                                fill="#666E76"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Task action area end from here */}
            <div className="task-action-btn">
                <button>Save</button>
                <button>Load</button>
                <button>Clear</button>
            </div>

            {/* Loading Spinner */}
            {loading && <Loading />}
        </div>
    );
};

export default Home;
