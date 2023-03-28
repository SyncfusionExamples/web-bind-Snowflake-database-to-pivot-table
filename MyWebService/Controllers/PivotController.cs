using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Snowflake.Data.Client;
using System.Data;

namespace MyWebService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SnowflakeController : ControllerBase
    {
        [HttpGet(Name = "GetSnowflakeResult")]
        public object Get()
        {
            return JsonConvert.SerializeObject(FetchSnowflakeResult());
        }

        public static DataTable FetchSnowflakeResult()
        {
            using (SnowflakeDbConnection snowflakeConnection = new SnowflakeDbConnection())
            {
                snowflakeConnection.ConnectionString = "<Enter your valid connection string here>";
                snowflakeConnection.Open();
                SnowflakeDbDataAdapter adapter = new SnowflakeDbDataAdapter("select * from CALL_CENTER", snowflakeConnection);
                DataTable dataTable = new DataTable();
                adapter.Fill(dataTable);
                snowflakeConnection.Close();
                return dataTable;
            }
        }
    }
}