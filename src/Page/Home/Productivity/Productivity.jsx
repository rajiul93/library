 
const Productivity = () => {
    return (
        <section 
        // className="bg-base-100"
        
         className="hero min-h-96 bg-fixed bg-cover bg-no-repeat mb-14 rounded-lg overflow-hidden"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
        >
      <div className="hero-overlay bg-opacity-30"></div>

        <div className="container px-6 py-10 mx-auto">
            <div className="lg:-mx-6 lg:flex lg:items-center">
                <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://media.istockphoto.com/id/1487737886/photo/female-student-taking-notes-while-e-learning-in-library.jpg?s=1024x1024&w=is&k=20&c=eCBKcC6zSwh1A-D42GMs-3-zo-erF2nMpRuzXg51NOg=" alt=""/>
    
                <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                    <p className="text-5xl font-semibold text-blue-500 ">“</p>
    
                    <h1 className="text-2xl font-semibold   lg:text-3xl lg:w-96">
                        Help us improve our productivity
                    </h1>
    
                    <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                        “Embrace the quiet sanctuary of the library for self-study. Here, amidst shelves of knowledge, find solitude and focus. Dive into textbooks, journals, and resources, crafting your own path of learning. Let the library be your haven for personal growth and academic exploration.”
                    </p>
    
                    <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                    <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
    
                     
                </div>
            </div>
        </div>
    </section>
    );
};

export default Productivity;