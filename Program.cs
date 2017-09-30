using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.OleDb;
using System.Linq;
namespace TokenExpiryUtility
{
    class Person
    {
        public String name;
        public DateTime date;
        public Person(String name,DateTime date)
        {
            this.name = name;
            this.date = date;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            string connectionString = null;
            OleDbConnection con;
            OleDbCommand cmd = null;
            OleDbDataReader rd = null;
            connectionString = @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source='C:\Users\hp\Desktop\RSA.xlsx';Extended Properties=Excel 12.0";
            con = new OleDbConnection(connectionString);
            string sql = "select * from [Sheet1$]";
            try
            {
                con.Open();
                cmd = new OleDbCommand(sql, con);
                rd = cmd.ExecuteReader();
                List<Person> persons = new List<Person>();
                while (rd.Read())
                {
                    Person p = new Person(Convert.ToString(rd[0]), DateTime.ParseExact(Convert.ToString(rd[1]), @"d/M/yyyy", System.Globalization.CultureInfo.InvariantCulture));
                    persons.Add(p);
                }
                var result = from c in persons
                             where c.date.Subtract(DateTime.Now).Days >0 && c.date.Subtract(DateTime.Now).Days < 16
                             select c;
                if (result.Any())
                {
                    Console.WriteLine("++++++++++++++++++++++++++++++++++++");
                    Console.WriteLine("Welcome to Token Expiry Utility Tool !");
                    Console.WriteLine("++++++++++++++++++++++++++++++++++++");
                    Console.WriteLine("");
                    Console.WriteLine("Name" + "     " + "Token Expiry Date");
                    foreach (var r in result)
                    {
                        Console.WriteLine(r.name + "       " + r.date.ToString("d"));
                    }
                    Console.WriteLine("");
                    Console.WriteLine("Press any key to exit !!");
                    Console.ReadLine();
                } 
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            finally
            {
                con.Close();
            }
        }
    }
}
