using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using AngularJSWebAPI.Models;

namespace AngularJSWebAPI.Controllers
{
   
    public class UserController : ApiController
    {
        User[] users = new User[]
        {
            new User() {Username="rajat.arora93@gmail.com",Password="hardworke" },
            new User() {Username="rj.arora93@gmail.com",Password="hardworke" }
        };

        [HttpGet]
        public JsonResult<Models.User>GetUser(string name)
        {
            try
            {
                Console.WriteLine("Web API");
                var user = users.FirstOrDefault(p => p.Username == name);
                if(user!=null)
                {
                    return Json<Models.User>(user);
                }
                else
                {
                    return null;
                }
            }
            catch(Exception)
            {
                return null;
            }

        }
    }
}
