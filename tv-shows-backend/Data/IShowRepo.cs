using showsBackend.Models;
using System.Collections.Generic;

namespace showsBackend.Data
{
    public interface IShowRepo
    {
        IEnumerable<Show> GetAllShows();
        Show GetShow(int id);
    }
}
