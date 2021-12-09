using showsBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace showsBackend.Data
{
    public class SQLShowRepo : IShowRepo
    {
        private readonly TvShowContext context;

        public SQLShowRepo(TvShowContext context)
        {
            this.context = context;
        }

        public void CreateShow(Show show)
        {
            if (show is null)
                throw new ArgumentNullException(nameof(show));

            context.Shows.Add(show);
        }

        public IEnumerable<Show> GetAllShows()
        {
            Console.WriteLine($"[{DateTime.Now}] Sending show list");
            return context.Shows.ToList();
        }

        public Show GetShow(int id)
        {
            Console.WriteLine($"[{DateTime.Now}] Sending a show with id {id}");
            return context.Shows.FirstOrDefault(x => x.Id == id);
        }

        public bool SaveChanges()
        {
            return context.SaveChanges() >= 0;
        }
    }
}
