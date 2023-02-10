using Microsoft.AspNetCore.Mvc;
using Snowflake.Data.Client;
using Newtonsoft.Json;
using System.Data;

namespace PivotController.Controllers
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
                snowflakeConnection.ConnectionString = "account=fvatbos-vc83911;user=snowuser;password=Coolcomp@123;role=ACCOUNTADMIN;db=SNOWFLAKE_SAMPLE_DATA;schema=TPCDS_SF10TCL;warehouse=test;server=https://fvatbos-vc83911.snowflakecomputing.com;";
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