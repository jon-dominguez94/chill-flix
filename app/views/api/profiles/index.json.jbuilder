unless @profiles.empty?
  @profiles.each do |profile|
    json.set! profile.id do
      json.partial! "api/profiles/profile", profile: profile
    end
  end
end