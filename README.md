<center>
  <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/sudo-self/deploy-button">
    <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" />
  </a>
</center>

## <a href="https://bucket.jessejesse.com/deploy.html">deploy with workers button generator</a>


1. **Get your GitHub repository URL**:  
   You need the GitHub repository URL in the format `https://github.com/USERNAME/REPO`, where:
   - `USERNAME` is your GitHub username.
   - `REPO` is the name of your repository.
  
2. **Construct the deploy button URL**:  
   The deploy button uses a special URL to link to Cloudflare's Workers deployment system. To create this URL, follow this format:

   ```html
   https://deploy.workers.cloudflare.com/?url=https://github.com/USERNAME/REPO

### deploy.yml

1. Log in to your Cloudflare dashboard: [Cloudflare Workers Dashboard](https://dash.cloudflare.com/?to=/:account/workers)
2. Your Account ID can be found on the Workers dashboard.


### Embed the button widget on any webpage

```
<script src="https://sudo-self.github.io/deploy-button/deploy-button.js"></script>
```

