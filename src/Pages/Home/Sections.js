import React from "react";

const Sections = () => {
  return (
    <div className="bg-[#E4E1DF] px-10">
      <h1 className="text-8xl font-sub font-bold py-20">THE BUILDING</h1>
      {/* hero1 */}
      <div className="hero py-8">
        <div className="hero-content flex-col items-end lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="w-7/12"
          />
          <div>
            <h1 className="text-3xl font-sub font-bold">
              SAINTE-CATHERINE / MACKAY
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      {/* hero2 */}
      <div className="hero py-8">
        <div className="hero-content flex-col items-end lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            className="w-5/12"
          />
          <div>
            <h1 className="text-3xl font-sub font-bold">TRAVEL LIGHT</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      {/* hero3 */}
      <div className="hero py-8">
        <div className="hero-content flex-col items-end lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1602002418153-3e900b530e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            className="w-6/12"
          />
          <div>
            <h1 className="text-3xl font-sub font-bold">RENTALS SIMPLIFIED</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      {/* hero4 */}
      <div className="hero py-8">
        <div className="hero-content flex-col items-end lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1602002418679-43121356bf41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            className="w-6/12"
          />
          <div>
            <h1 className="text-3xl font-sub font-bold">PEACE OF MIND</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
