using Microsoft.EntityFrameworkCore;
using showsBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace showsBackend.Data
{
    public class TvShowContext : DbContext
    {
        public TvShowContext(DbContextOptions<TvShowContext> options)
            :base(options)
        {

        }

        public DbSet<Show> Shows { get; set; }

    }
}
